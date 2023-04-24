class Tabs {
    static CLASS_TABS_NAV_BTN = "tabs-nav-btn";
    static CLASS_TABS_NAV_BTN_ACTIVE = "tabs-nav-btn__active";
    static CLASS_TABS_CNT_ITEM = "tabs-content-item";
    static CLASS_TABS_CNT_ITEM_ACTIVE = "tabs-content-item__active";
    static DEFAULT_TAB_INDEX = 0;

    constructor (rootEl, options) {
        this.options = {
            defaultTabIndex: Tabs.DEFAULT_TAB_INDEX,
            ...options
        };

        this.activeTabIndex = this.options.defaultTabIndex;
        this.rootEl = rootEl;

        const [navEl, contentEl] = rootEl.children;
        this.navElements = Array.from(navEl.children);
        this.contentElements = Array.from(contentEl.children);

        this.bindTabStyles();
        this.bindContentStyles();
        this.bindEvents();
        this.openItemByIndex(this.activeTabIndex);
    }

    bindTabStyles() {
        this.navElements.forEach((btn) => {
            btn.classList.add(Tabs.CLASS_TABS_NAV_BTN);
        });
    }

    bindContentStyles() {
        this.contentElements.forEach((item) => {
            item.classList.add(Tabs.CLASS_TABS_CNT_ITEM);
        });
    }

    bindEvents () {
        this.rootEl.addEventListener("click", (event) => this.onRootElClick(event));
    }

    onRootElClick (event) {
        const target = event.target;
        const tab = this.findTabEl(target);

        if (tab) {
            this.clickTab(tab);
        }
    }

    findTabEl (element) {
       return element.closest(`.${Tabs.CLASS_TABS_NAV_BTN}`)
    }

    clickTab (tab) {
        const tabIndexToOpen = this.findTabIndex(tab);
        
        if (tabIndexToOpen === this.activeTabIndex) return;

        this.closeItemByIndex(this.activeTabIndex);
        this.activeTabIndex = tabIndexToOpen;
        this.openItemByIndex(this.activeTabIndex);
    }

    findTabIndex(tab) {
        return this.navElements.indexOf(tab);
    }

    closeItemByIndex(itemIndex) {
        this.closeTab(this.navElements[itemIndex]);
        this.closeContent(this.contentElements[itemIndex]);
    }

    closeTab (tab) {
        tab.classList.remove(Tabs.CLASS_TABS_NAV_BTN_ACTIVE);
    }

    closeContent (item) {
        item.classList.remove(Tabs.CLASS_TABS_CNT_ITEM_ACTIVE);
    }

    openItemByIndex(itemIndex) {
        this.openTab(this.navElements[itemIndex]);
        this.openContent(this.contentElements[itemIndex]);
    }

    openTab (tab) {
        tab.classList.add(Tabs.CLASS_TABS_NAV_BTN_ACTIVE);
    }

    openContent (item) {
        item.classList.add(Tabs.CLASS_TABS_CNT_ITEM_ACTIVE);
    }
}