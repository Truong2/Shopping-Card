import React from "react";
function FooterEdit() {
    return (
        <div>
            <div ClassName="edit-user-action" style={{display:'flex'}}>
                <div 
                    className="button-item bg-[#f2f2f2] w-[152px] h-[52px] text-[#7d7d7d] flex text-2xl font-bold relative">
                    <button className="button button-muted w-100-mobile" style={{width:'154px', height:'53px', marginBottom:'1px'}}  type="button">
                        <span role="img" aria-label="arrow-left" class="anticon anticon-arrow-left">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-left" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                                </path>
                            </svg>
                        </span>
                        &nbsp; Back to Profile                     
                    </button>
                </div>
                <div 
                    className="button-item bg-[#101010] w-[152px] h-[52px] text-[#fff] flex text-2xl font-bold relative ml-[250px]">
                    <button class="button w-100-mobile" style={{width:'154px', height:'53px'}} type="button">
                        <span role="img" aria-label="check" class="anticon anticon-check">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z">
                                </path>
                            </svg>
                        </span>
                        &nbsp;Update Profile
                    </button>
                </div>
            </div>
        </div>
    )
}
export default FooterEdit;