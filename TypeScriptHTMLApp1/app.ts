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
    public setTagToEnd(item: Greeter): void {
        this.includeTags.push(item);
    }
    public setTagToBegining(item: Greeter): void {
        this.includeTags.unshift(item);
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
                   str+= ht.getHtml();
                });
            }
            str += `</${this.name}> `;
        }
        return str;
    }
}

window.onload = () => {
    let wrapper: Greeter = new Greeter("div", false, "");
    wrapper.setStyle("display", "flex");
    wrapper.setAttr("id", "wrapper");
    let div1: Greeter = new Greeter("div", false, "");
    div1.setStyle("width", "300px");
    div1.setStyle("margin", "10px");
    let h: Greeter = new Greeter("h3", false, "What is Lorem Ipsum?");
    let img: Greeter = new Greeter("img", true, "");
    img.setAttr("src", "lipsum.jpg");
    img.setAttr("alt", "Lorem Ipsum");
    img.setStyle("width", "100%");
    let p: Greeter = new Greeter("p", false, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt gravida urna eu viverra. Aliquam vehicula mauris dolor, non consectetur magna pharetra id. Phasellus velit nulla, ultricies ut ipsum in, vestibulum accumsan velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget nisi facilisis, mattis tortor in, feugiat eros. Aliquam porttitor id ante nec feugiat. Phasellus pulvinar libero et maximus finibus. Nullam ultricies quis mauris sit amet hendrerit. In non ligula in nunc dapibus egestas eget eget nisi. Vivamus iaculis magna leo, in posuere est dignissim id. Sed dignissim hendrerit turpis ac posuere. Aliquam vitae accumsan nunc.");
    p.setStyle("text-align", "justify");
    let a: Greeter = new Greeter("a", false, "More...");
    a.setAttr("href", "https://www.lipsum.com");
    a.setAttr("target", "_blank");
    div1.setTagToEnd(img);
    div1.setTagToEnd(p);
    div1.setTagToEnd(a);
    div1.setTagToBegining(h);
    wrapper.setTagToEnd(div1);
    wrapper.setTagToEnd(div1);
    document.write(wrapper.getHtml());


};
