import "./App.css";

function App() {
  return (
    <main
      className="bg-custom-bg text-custom-fg overflow-auto flex flex-col"
      style={{ height: "788px" }}
    >
      <div className="flex-none">
        <header className="border-b border-custom-line">
          <div className="max-w-screen-md mx-auto ">
            <div className="flex justify-evenly text-custom-fgcolor p-3 items-center">
              <div className="flex flex-1">
                <button className="px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm svelte-1r54uzk">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </button>
                <button className="px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm svelte-1r54uzk">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>
              <h1 className="font-serif text-3xl font-bold flex-grow text-center flex-1">
                Mario Heardle
              </h1>
              <div className="flex flex-1 justify-end">
                <button className="px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm svelte-1r54uzk">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </button>
                <button className="px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm svelte-1r54uzk">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="w-full flex flex-col flex-grow relative">
        <div className="max-w-screen-sm w-full mx-auto h-full flex flex-col justify-between overflow-auto">
          <div className="p-3 flex-col items-evenly">
            <div className="p-2 mb-2 border border-custom-mg flex items-center last:mb-0 border-custom-line">
              <div className="w-5 h-5"></div>
            </div>
            <div className="p-2 mb-2 border border-custom-mg flex items-center last:mb-0">
              <div className="w-5 h-5"></div>
            </div>
            <div className="p-2 mb-2 border border-custom-mg flex items-center last:mb-0">
              <div className="w-5 h-5"></div>
            </div>
            <div className="p-2 mb-2 border border-custom-mg flex items-center last:mb-0">
              <div className="w-5 h-5"></div>
            </div>
            <div className="p-2 mb-2 border border-custom-mg flex items-center last:mb-0">
              <div className="w-5 h-5"></div>
            </div>
            <div className="p-2 mb-2 border border-custom-mg flex items-center last:mb-0">
              <div className="w-5 h-5"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-3 flex flex-col items-center text-sm text-custom-line">
        <p>
          <a href="https://docs.google.com/spreadsheets/d/12vCtRU4cKzgTZk60kVveHRxQvdC2u0yS5pEISWeDlZo/edit#gid=0">
            Click Here for the full list of Mario Heardle songs.
            <svg
              className="mt-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </a>
        </p>
      </div>
      <div className="border-t border-custom-line">
        <div className="max-w-screen-sm w-full mx-auto px-3 flex-col">
          <div className="h-3 w-full relative overflow-hidden ">
            <div
              className="h-full absolute bg-custom-mg overflow-hidden"
              style={{ width: "8%" }}
            >
              <div
                className="h-full absolute bg-custom-positive"
                style={{ width: "0%" }}
              ></div>
            </div>
            <div className="w-full h-full absolute">
              <div className="bg-custom-line w-px h-full absolute right-0"></div>
              <div
                className="w-px h-full absolute bg-custom-line"
                style={{ left: "8%" }}
              ></div>
              <div
                className="w-px h-full absolute bg-custom-mg"
                style={{ left: "16%" }}
              ></div>
              <div
                className="w-px h-full absolute bg-custom-mg"
                style={{ left: "28%" }}
              ></div>
              <div
                className="w-px h-full absolute bg-custom-mg"
                style={{ left: "44%" }}
              ></div>
              <div
                className="w-px h-full absolute bg-custom-mg"
                style={{ left: "64%" }}
              ></div>
              <div
                className="w-px h-full absolute bg-custom-mg"
                style={{ left: "100%" }}
              ></div>
              <div className="bg-custom-mg w-px h-full absolute right-0"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-custom-line">
        <div className="max-w-screen-sm w-full mx-auto flex-col">
          <div className="px-3 ">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div>0:00</div>
              </div>
              <div className="flex justify-center items-center p-1">
                <button className="px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm svelte-1r54uzk">
                  <div className="flex justify-center items-center text-custom-fg h-14 w-14 border-2 rounded-full relative overflow-hidden">
                    <div className="ml-1 relative z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              <div>0:25</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden">
        <div>
          <iframe
            name="868"
            id="soundcloud868"
            allow="autoplay"
            height="0"
            src="https://w.soundcloud.com/player/?url=https://soundcloud.com/vgmplanet/2-11-squizzard&amp;cache=868"
          ></iframe>
        </div>
      </div>
      <div className="max-w-screen-sm w-full mx-auto flex-col">
        <div className="m-3 mt-0">
          <div>
            <div className="autoComplete_wrapper relative">
              <svg
                className="absolute top-4 left-3"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                className="focus:outline-none focus:border-custom-positive w-full p-3 pl-9 placeholder:text-custom-line bg-custom-bg text-custom-fg border-custom-mg"
                id="autoComplete"
                type="search"
                dir="ltr"
                spellCheck="false"
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                aria-controls="autoComplete_list_1"
                aria-autocomplete="both"
                placeholder="Know it? Search for the game / title"
                role="combobox"
                aria-owns="autoComplete_list_1"
                aria-haspopup="true"
                aria-expanded="false"
              />
              <ul id="autoComplete_list_1" role="listbox" hidden=""></ul>
              <div className="absolute right-3 top-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </div>
            <div className="flex justify-between pt-3">
              <button className="px-2 py-2 uppercase tracking-widest bg-custom-mg border-none flex items-center font-semibold text-sm svelte-1r54uzk">
                Skip <span className="tracking-normal lowercase">(+1s)</span>
              </button>
              <button className="px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm svelte-1r54uzk bg-custom-positive">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
