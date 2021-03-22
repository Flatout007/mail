function Router(node) {
    this.node = node;
}

Router.prototype.start = function() {
    window.addEventListener('hashchange', (e) => {
          this.render();
    });
}

Router.prototype.activeRoute = function() {

}

Router.prototype.render = function() {

}