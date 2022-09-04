import React from "react";
function SubmitSignUp() {
    return(
        <div>
            <div class="auth-field auth-action  flex mt-[16px] relative"> 
                <button className="button auth-button bg-black text-white w-[120px] h-[48px] ml-[144px] text-2xl font-bold absolute left-[126px]" type="submit">
                    Sign Up&nbsp;
                    <span role="img" aria-label="arrow-right" class="anticon anticon-arrow-right">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-right" className="text-2xl font-bold" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z">
                            </path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    )
}
export default SubmitSignUp;