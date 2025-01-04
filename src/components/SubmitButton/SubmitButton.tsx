import { useState } from "react";

interface SubmitButtonProps {
  onSubmit?: (email?: string) => void;
  loading: boolean;
  useEmail: boolean;
  onToggleEmail: (checked: boolean) => void;
  enableEmail: boolean;
}

const SubmitButton = ({ onSubmit, loading, useEmail, onToggleEmail, enableEmail }: SubmitButtonProps) => {
  const [email, setEmail] = useState("");

  return (
    <div className="fr-flex fr-flex-col fr-w-full fr-gap-2">
      {enableEmail && <label className="fr-flex fr-items-center fr-justify-between fr-cursor-pointer" style={{
            opacity: useEmail ? 1 : 0.5,
          }}>
        <span className="fr-text-sm">Submit using email</span>
        <input 
          type="checkbox"
          className={'!fr-toggle !fr-toggle-sm'}
          style={{
            opacity: useEmail ? 1 : 0.5,
          }}
          checked={useEmail}
          onChange={(e) => onToggleEmail(e.target.checked)}
        />
      </label>}
      
      {useEmail ? (
        <div className="fr-flex fr-w-full fr-gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="fr-flex-1 fr-h-[32px] sm:fr-h-[36px] fr-p-2 fr-text-sm fr-border fr-border-solid fr-border-gray-200 fr-rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="fr-w-[80px] fr-h-[32px] sm:fr-h-[36px] fr-rounded-lg fr-text-white fr-flex fr-items-center fr-justify-center fr-bg-brandLightBlue fr-cursor-pointer hover:fr-bg-brandDarkBlue fr-transition-all fr-duration-300 fr-text-sm"
            onClick={() => onSubmit?.(email)}
            disabled={loading || !email}
          >
            {loading ? "..." : "Submit"}
          </button>
        </div>
      ) : (
        <button
          className="fr-w-[180px] fr-h-[32px] sm:fr-h-[36px] fr-rounded-lg fr-text-white fr-flex fr-items-center fr-justify-center fr-bg-brandLightBlue fr-cursor-pointer hover:fr-bg-brandDarkBlue fr-transition-all fr-duration-300 fr-mx-auto fr-text-sm sm:fr-text-base"
          onClick={() => onSubmit?.()}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit review"}
        </button>
      )}
    </div>
  );
};

export default SubmitButton;
