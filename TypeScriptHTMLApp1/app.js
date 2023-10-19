var Greeter = /** @class */ (function () {
    function Greeter(n, o, t) {
        this.attributes = new Array;
        this.styles = new Array;
        this.includeTags = new Array;
        this.name = n;
        this.selfClosing = o;
        this.text = t;
    }
    Greeter.prototype.setAttr = function (attrName, attrValue) {
        this.attributes.push("".concat(attrName, "='").concat(attrValue, "'"));
    };
    Greeter.prototype.setStyle = function (stName, stValue) {
        this.styles.push("".concat(stName, ":").concat(stValue));
    };
    Greeter.prototype.getHtml = function () {
        var str = "<".concat(this.name, " ");
        if (this.styles.length > 0) {
            str += " style='";
            this.styles.forEach(function (s) {
                str += s + ';';
            });
            str += "' ";
        }
        if (this.attributes.length > 0) {
            this.attributes.forEach(function (a) {
                str += a + ' ';
            });
            str += ' ';
        }
        if (!this.selfClosing)
            str += '>';
        else {
            str += ' />';
        }
        str += this.text;
        if (!this.selfClosing) {
            if (this.includeTags.length > 0) {
                this.includeTags.forEach(function (ht) {
                    ht.getHtml();
                });
            }
            str += "</".concat(this.name, "> ");
        }
        return str;
    };
    return Greeter;
}());
window.onload = function () {
    var wrapper = new Greeter("div", false, "fdsdfsdfsdfsd");
    wrapper.setStyle("display", "flex");
    wrapper.setAttr("id", "wrapper");
    document.write(wrapper.getHtml());
    var div1 = new Greeter("div", false, "");
    div1.setStyle("width", "300px");
    div1.setStyle("margin", "10px");
    var hr = new Greeter("hr", false, "What is Lorem Ipsum?");
    var img = new Greeter("img", true, "");
    img.setAttr("src", "lipsum.jpg");
    img.setAttr("alt", "Lorem Ipsum");
    img.setStyle("width", "100%");
    document.write(hr.getHtml());
    document.write(img.getHtml());
};
//# sourceMappingURL=app.js.map