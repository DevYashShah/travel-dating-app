interface OnboardingProgressProps {
  currentStep: number
  totalSteps: number
}

export default function OnboardingProgress({ currentStep, totalSteps }: OnboardingProgressProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded-full mx-0.5 ${index < currentStep ? "bg-rose-500" : "bg-gray-200"}`}
          />
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span>
          Step {currentStep} of {totalSteps}
        </span>
        <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
      </div>
    </div>
  )
}
