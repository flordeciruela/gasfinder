'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<p>Gas Finder</p>");
  const icon = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');

  header.append(title);
  return header;
}
