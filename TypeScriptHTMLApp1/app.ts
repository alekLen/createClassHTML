class Greeter {
    private name: string;
    private selfClosing: boolean;
    private text: string;
    private attributes: Array<string> = new Array<string>
    private styles: Array<string> = new Array<string>;
    private includeTags: Array<Greeter> = new Array<Greeter>

    constructor(n: string, o: boolean, t: string) {
        this.name = n;
        this.selfClosing = o;
        this.text = t;
    }

    public setAttr(attrName: string, attrValue: string): void {
        this.attributes.push(`${attrName}='${attrValue}'`);
    }
    public setStyle(stName: string, stValue: string): void {
        this.styles.push(`${stName}:${stValue}`);
    }

    getHtml(): string {
        let str: string = `<${this.name} `;

        if (this.styles.length > 0) {
            str += " style='";
            this.styles.forEach((s) => {
                str += s + ';';
            });
            str += "' ";
        }
        if (this.attributes.length > 0) {
            this.attributes.forEach((a) => {
                str += a + ' ';
            });
            str += ' ';
        }
        if (!this.selfClosing)
            str += '>';
        else
        { str += ' />'; }
        str += this.text;
        if (!this.selfClosing)
        {
           if (this.includeTags.length > 0) {
                this.includeTags.forEach((ht) => {
                    ht.getHtml();
                });
            }
            str += `</${this.name}> `;
        }
        return str;
    }
}

window.onload = () => {
    let wrapper: Greeter = new Greeter("div", false, "fdsdfsdfsdfsd");
    wrapper.setStyle("display", "flex");
    wrapper.setAttr("id", "wrapper");
    document.write(wrapper.getHtml());
    let div1: Greeter = new Greeter("div", false, "");
    div1.setStyle("width", "300px");
    div1.setStyle("margin", "10px");
    let hr: Greeter = new Greeter("hr", false, "What is Lorem Ipsum?");
    let img: Greeter = new Greeter("img", true, "");
    img.setAttr("src", "lipsum.jpg");
    img.setAttr("alt", "Lorem Ipsum");
    img.setStyle("width", "100%");

    document.write(hr.getHtml());
    document.write(img.getHtml());

};
