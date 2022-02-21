import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DOMMessage, DOMMessageResponse } from './types'


function App() {
  const [title, setTitle] = React.useState<string>('');
  const [headlines, setHeadlines] = React.useState<string[]>([]);

  React.useEffect(() => {
    /**
     * We can't use "chrome.runtime.sendMessage" for sending messages from React.
     * For sending messages from React we need to specify which tab to send it to.
     */
    chrome.tabs && chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      /**
       * Sends a single message to the content script(s) in the specified tab,
       * with an optional callback to run when a response is sent back.
       *
       * The runtime.onMessage event is fired in each content script running
       * in the specified tab for the current extension.
       */
      chrome.tabs.sendMessage(
        tabs[0].id || 0,
        { type: 'GET_DOM' } as DOMMessage,
        (response: DOMMessageResponse) => {
          setTitle(response.title);
          setHeadlines(response.headlines);
        });
    });
  });

  return (
    <div className="App">
      <h1>SEO Extension built with React!</h1>

      <ul className="SEOForm">
        <li className="SEOValidation">
          <div className="SEOValidationField">
            <span className="SEOValidationFieldTitle">Title</span>
            <span className={`SEOValidationFieldStatus ${title.length < 30 || title.length > 65 ? 'Error' : 'Ok'}`}>
              {title.length} Characters
            </span>
          </div>
          <div className="SEOVAlidationFieldValue">
            {title}
          </div>
        </li>

        <li className="SEOValidation">
          <div className="SEOValidationField">
            <span className="SEOValidationFieldTitle">Main Heading</span>
            <span className={`SEOValidationFieldStatus ${headlines.length !== 1 ? 'Error' : 'Ok'}`}>
              {headlines.length}
            </span>
          </div>
          <div className="SEOVAlidationFieldValue">
            <ul>
              {headlines.map((headline, index) => (<li key={index}>{headline}</li>))}
            </ul>
          </div>
        </li>
      </ul>

      {/* Radio Form */}
      <div className="radio_container">
        <div className="leftSide_cut">
          <div className="channel">
            <div className="titleContainer">
              <div className="title">UCBI Worship</div>
              <div className="subtitle">Dublin, Ireland</div>
            </div>
          </div>
          <div className="_barContainer_14nwo_46">
            <div className="_barContent_14nwo_71">
              <div className="_controlsContainer_14nwo_111">
                <div className="_control_oyndo_11" aria-label="previous">
                  <div>
                    <svg width="50" height="50">
                      <path d="M37.66 18.718v12.56a1.003 1.003 0 0 1-1.5.87l-10.52-6.02v5.08c0 .55-.45 1-1 1H24c-.55 0-1-.45-1-1v-12.38c0-.55.45-1 1-1h.64c.55 0 1 .45 1 1v5.04l10.52-6.01c.48-.28 1.09-.11 1.37.37.08.15.13.32.13.49">
                      </path>
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="_control_oyndo_11 _modPlay_oyndo_53" aria-label="play">
                    <div>
                      <svg width="50" height="50">
                        <path d="M35.6613092,25.8454889 L19.533993,36.0311623 C19.0670424,36.3260785 18.4494273,36.186617 18.1545111,35.7196664 C18.0535739,35.5598493 18,35.3746968 18,35.1856734 L18,14.8143266 C18,14.2620418 18.4477153,13.8143266 19,13.8143266 C19.1890234,13.8143266 19.3741758,13.8679005 19.533993,13.9688377 L35.6613092,24.1545111 C36.1282599,24.4494273 36.2677213,25.0670424 35.9728051,25.533993 C35.8934185,25.6596886 35.7870048,25.7661022 35.6613092,25.8454889 Z">
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="_control_oyndo_11" aria-label="next">
                  <div>
                    <svg width="50" height="50">
                      <path d="M27.66 18.79v12.38c0 .55-.45 1-1 1h-.64c-.55 0-1-.45-1-1v-5.04L14.5 32.15c-.48.27-1.09.1-1.37-.38-.08-.15-.13-.32-.13-.49V18.72c0-.55.45-1 1-1 .17 0 .35.05.5.14l10.52 6.01v-5.08c0-.55.45-1 1-1h.64c.55 0 1 .45 1 1">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="_volumeControlContainer_14nwo_129">
                <div className="_container_17yp4_1">
                  <svg className="_volumeIconDown_17yp4_148" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <polygon points="28 8 21.714 12.645 17 12.645 17 19.355 21.189 19.355 28 24">
                    </polygon>
                  </svg>
                  <div className="_track_17yp4_52">
                    {/* <div className="_activeTrack_17yp4_69" style="transform: scaleX(0.8);"> */}
                    <div className="_activeTrack_17yp4_69">
                    </div>
                    <div className="_runnableTrack_17yp4_58">
                    </div>
                    <input aria-label="volume slider" className="_input_17yp4_82" type="range" min="0" max="1" step="any" value="0.8" />
                  </div>
                  <svg className="_volumeIconUp_17yp4_149" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <path d="M24.3923492,5.30137405 C24.1785189,5.02237829 23.7037764,4.8898803 23.4345267,5.11137694 C23.1657675,5.33237358 23.0205983,5.82336613 23.2339382,6.10236189 C25.4178519,8.94981864 26.5723394,12.3807665 26.5723394,16.0242112 C26.5723394,19.6681558 25.4178519,23.0991037 23.2339382,25.9465605 C23.0205983,26.2255562 23.1657675,26.7165488 23.4345267,26.9375454 C23.5492889,27.031544 23.768514,26.9915446 23.9038744,26.9915446 C24.0872977,26.9915446 24.2697401,26.9080459 24.3923492,26.7475483 C26.7523296,23.669595 28,19.9616514 28,16.0242112 C28,12.087271 26.7523296,8.3793273 24.3923492,5.30137405 M20.9700834,8.2738289 C20.7567435,7.99933307 20.3065228,7.9053345 20.0421775,8.12883111 C19.7793036,8.35182772 19.5757724,8.80632081 19.7891123,9.08031665 C21.3065228,11.031287 22.1417361,13.4922496 22.1417361,16.0087114 C22.1417361,18.5256732 21.3065228,20.9861358 19.7891123,22.9371062 C19.5757724,23.211102 19.7631192,23.6655951 20.0259931,23.8885917 C20.1397744,23.9850903 20.3580186,23.9800903 20.4933791,23.9800903 C20.6723884,23.9800903 20.8489456,23.8995916 20.9700834,23.7435939 C22.6635606,21.565127 23.5963708,18.8186687 23.5963708,16.0087114 C23.5963708,13.1992541 22.6635606,10.4522958 20.9700834,8.2738289 M16.4914174,11.1272856 C16.223639,11.3512822 16.0225601,11.7457762 16.250613,12.0082722 C17.2182442,13.1232552 17.7508583,14.5437337 17.7508583,16.0082114 C17.7508583,17.4731892 17.2182442,18.8936676 16.250613,20.0081507 C16.0225601,20.2706467 16.223639,20.6656407 16.4914174,20.8891373 C16.6110839,20.9896358 16.7582148,21.039135 16.903384,21.039135 C17.0833742,21.039135 17.2618931,20.9641361 17.3879353,20.8196383 C18.5512506,19.4791587 19.1922511,17.7701847 19.1922511,16.0082114 C19.1922511,14.2462382 18.5512506,12.5377641 17.3879353,11.1972845 C17.1603727,10.9347885 16.7587052,10.902289 16.4914174,11.1272856 M12.8916135,8.68382268 L7.23001471,13.0122569 L3,13.0122569 L3,19.5121582 L7.03138794,19.5121582 L12.8916135,23.9930901 C13.1074056,24.1580876 13.2839627,24.068089 13.2839627,23.7930932 L13.2839627,8.88381964 C13.2839627,8.60882381 13.1074056,8.51882518 12.8916135,8.68382268">
                    </path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="_rightSide_1cutf_10">
          <div className="___pxtzn_1 _hoverBg_1pxsi_18 _hoverBg_pxtzn_23" data-js="collapser-block" aria-label="add to favorites">
            {/* <svg className="_svg_f6il3_1" width="32" height="32" style="fill: none; stroke: var(--color-foreground);"> */}
            <svg className="_svg_f6il3_1" width="32" height="32">
              <path d="M11.198 9C8.85 9 7 10.89 7 13.29c0 3.128 1.92 5.82 9 11.71 7.08-5.89 9-8.582 9-11.71C25 10.89 23.15 9 20.802 9c-2.098 0-3.237 1.273-4.126 2.327l-.676.8-.676-.8C14.434 10.31 13.296 9 11.197 9h0z">
              </path>
            </svg>
            <div data-css="hairline-borders" className="_container_1pnrb_1">
              {/* <div className="_bottom_1pnrb_39" style="background-color: var(--color-background-6);"> */}
              <div className="_bottom_1pnrb_39">
              </div>
            </div>
          </div>
          <div className="___pxtzn_1 _hoverBg_1pxsi_18 _hoverBg_pxtzn_23" data-js="collapser-block" aria-label="show more channel options">
            {/* <svg className="_svg_f6il3_1" width="32" height="32" style="fill: var(--color-foreground); stroke: none;"> */}
            <svg className="_svg_f6il3_1" width="32" height="32">
              <g>
                <circle cx="22.5" cy="16.5" r="1.5">
                </circle>
                <circle cx="16.5" cy="16.5" r="1.5">
                </circle>
                <circle cx="10.5" cy="16.5" r="1.5">
                </circle>
              </g>
            </svg>
          </div>
          <div data-css="hairline-borders" className="_container_1pnrb_1">
            {/* <div className="_left_1pnrb_61" style={{ backgroundColor: "var(--color-background-6)}" } > */}
            <div className="_left_1pnrb_61">
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
