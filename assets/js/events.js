const className = {
  active: 'is-active',
  selected: 'is-selected'
},
page = {
  housewares: 'items-housewares.html',
  misc: 'items-miscellaneous.html',
  wallMounted: 'items-wallMounted.html',
  tops: 'fashion-tops.html',
  bottoms: 'fashion-bottoms.html',
  dresses: 'fashion-dresses.html',
  swimwear: 'fashion-swimwear.html',
  headwear: 'fashion-headwear.html',
  accessories: 'fashion-accessories.html',
  socks: 'fashion-socks.html',
  shoes: 'fashion-shoes.html',
  bags: 'fashion-bags.html',
  umbrellas: 'fashion-umbrellas.html',
  wallpaper: 'house-wallpaper.html',
  floors: 'house-floors.html',
  rugs: 'house-rugs.html',
  photos: 'npc-photos.html',
  posters: 'npc-posters.html',
  villagers: 'npc-villagers.html',
  insects: 'catch-insects.html',
  fish: 'catch-fish.html',
  seaCreatures: 'catch-seaCreatures.html',
  music: 'others-music.html',
  fossils: 'others-fossils.html',
  art: 'others-art.html',
  tools: 'diy-tools.html',
  fencing: 'diy-fencing.html',
  materials: 'diy-materials.html',
  recipes: ''
},
element = {
  nav: {
    main: '#js-main-nav',
    source: '#js-source-nav',
    filter: {
      or: '.nav[data-search-type="or"]',
      and: '.nav[data-search-type="and"]',
      not: '.nav[data-search-type="not"]'
    }
  },
  mainContent: '#js-main',
  itemList: '#js-item-list',
  menu: '.js-menu',
  view: '.js-switch-view'
};

function updateFilter(attribute) {
  $(element.mainContent).attr(currentSelected.category, 'false');
  $(element.mainContent).attr(currentSelected.source, 'false');
  currentSelected.source = attribute;
  $(element.mainContent).attr(attribute, 'true');
}

function updateSeletedMenu(menu) {
  let $this = menu,
      attribute = $this.data('filter');
  $(element.nav.source).find(element.menu).removeClass(className.selected);
  $this.addClass(className.selected);
}

function addSelectedMenuState() {
  let href = window.location.href,
      index = href.lastIndexOf('/') + 1,
      filename = href.substr(index);
  $(element.nav.main).find(element.menu+'[href="'+filename+'"]').addClass(className.selected);
}

addSelectedMenuState();

$(element.nav.source).on('click', element.menu, function(event) {
  event.preventDefault();
  updateSeletedMenu($(this))
  updateFilter(attribute);
});

$(function() {
  $('.js-load-image').lazy();
});
