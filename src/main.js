// Fill the ticker with enough copies of its text to loop seamlessly.
const track = document.querySelector(".ticker__track");

if (track) {
  const item = track.firstElementChild;
  const minWidth = window.innerWidth * 2;
  while (track.scrollWidth < minWidth) {
    track.appendChild(item.cloneNode(true));
  }
  // Duplicate the whole set so translateX(-50%) lands on an identical frame.
  track.append(...[...track.children].map((el) => el.cloneNode(true)));
}
