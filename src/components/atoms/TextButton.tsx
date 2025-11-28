import { cn } from "@/lib/utils"

export type TextButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** 표시 텍스트 */
  label?: string
  /** 꽉 찬 pill(파란 배경/흰 글자/하늘색 버튼) */
  intent?: "primary" | "neutral" | "secondary"
  /** 가로로 꽉 채우기 */
  fullWidth?: boolean
}

export function TextButton({
  label = "확인",
  intent = "primary",
  fullWidth = false,
  className,
  ...rest
}: TextButtonProps) {
  const intentClass =
    intent === "neutral"
      ? "bg-[#00A4FD] text-white hover:bg-[#00A4FD]/90 active:bg-[#00A4FD]/95"
      : intent === "primary"
      ? "bg-[#1050A4] text-white hover:bg-[#1050A4]/90 active:bg-[#1050A4]/95"
      : "bg-[#00A4FD] text-white hover:bg-[#00A4FD]/90 active:bg-[#00A4FD]/95";

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center rounded-full px-8 h-12",
        "text-base font-semibold whitespace-nowrap select-none",
        "transition-[background,transform,box-shadow] duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
        "cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
        intentClass,
        fullWidth ? "w-full": "w-[294px]",
        "h-[53px] rounded-[26.5px]",
        className
      )}
      {...rest}
    >
      {label}
    </button>
  )
}
