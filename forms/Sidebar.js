/**
 *  This script describes a sidebar on the dashboard page.
 *  Sidebar contains:
 *   - profile picture and name;
 *   - dashboard menu;
 *   - cashflows link;
 *   - platforms link;
 *   - admin menu.
 */
var Sidebar = function() {
    var profileName = element(by.xpath('//strong[@class=\'font-bold ng-binding\']'));
    var realEstate = element(by.xpath('//a[contains(text(),\'Real Estate\')]'));
    var dashboardMenu = element(by.xpath('//ul[@id=\'side-menu\']/li[2]/a'));
    var adminMenu = element(by.xpath('//ul[@id=\'side-menu\']/li[5]/a'));
    var usersLink = element(by.xpath('//a[contains(text(),\'Users\')]'));

    this.getProfileName = function() {
        return profileName.getText();
    };

    this.lnkRealEstate = function() {
        return realEstate;
    };

    this.dashboardMenu = function() {
        return dashboardMenu;
    };

    this.adminMenu = function() {
        return adminMenu;
    };

    this.lnkUsers = function() {
        return usersLink;
    };
};
module.exports = Sidebar;