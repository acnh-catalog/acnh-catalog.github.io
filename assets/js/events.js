const className = {
  active: 'is-active',
  selected: 'is-selected'
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
  count: {
    variants: '.count > span:first-child', // '.js-count'
    patterns: ''
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

$(element.nav.source).on('click', element.menu, function(event) {
  event.preventDefault();
  updateSeletedMenu($(this))
  updateFilter(attribute);
});

$(function() {
  $('.js-load-image').lazy();
  let variantsCount = $(element.count.variants).length;

  if ($('#js-variants-count').length) {
    $('#js-variants-count').html(variantsCount)
  } else {
    let htmlItemCount = `<div class="total-variants-count" id="js-variants-count">${variantsCount}</div>`;
    console.log(htmlItemCount)
    $(element.itemList).prepend(htmlItemCount);
  }
});
