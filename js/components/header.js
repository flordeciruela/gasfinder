'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<p>Gas Finder</p>");
  const icon = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');

  icon.on("click", (e) => {
    e.preventDefault();
    state.selectedStation = null;
    update();
  });

  if(state.selectedStation != null){
    header.append(icon);
  }
  header.append(title);
  return header;
}
