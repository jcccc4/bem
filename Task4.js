
  class Modifier {
    constructor(name) {
      this.name = name;
    }
    build() {
      return `${this.name}`;
    }
  }

  class Element extends Modifier {
    constructor(brand) {
      super(brand);
      this.brand = brand;
    }
    modifier(m) {
      return new Modifier(`${this.brand}--${m}`);
    }
  }
  class Block extends Element {
    constructor(brand) {
      super(brand);
      this.blk = brand;
    }
    element(name) {
      return new Element(`${this.blk}__${name}`);
    }
  }
  const bem = {
    block: (blockName) => {
      return new Block(blockName);
    },
  };
  console.log(bem.block("list").build());
  console.log(bem.block("list").element("item").build());
  console.log(bem.block("list").modifier("active").build());
  console.log(bem.block("list").element("item").modifier("active").build());