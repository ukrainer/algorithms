class UF {
  constructor(n) {
   this.count = n;
   this.id = [];

   for (let i=0; i<n; i++) {
     this.id[i]=i;
   }
  }

  union(p, q) {
    const pid = this.id[p];
    const qid = this.id[q];

    for (let i=0; i<this.id.length; i++) {
      if (this.id[i] === qid) this.id[i] = pid;
    }
  }

  connected(p, q) {
    return this.id[p] === this.id[q];
  }

  find(p) {}

  count() {
    // return this
  }

  getList() {
    return [...this.id];
  }
}

const input = `4 3
3 8
6 5
4 9
2 1
8 9
5 0
7 2
6 1
1 0
6 7`;
const pairs = input.split("\n");
const uf = new UF(10);

pairs.forEach(item => {
  let [p, q] = item.split(" ");
  p = Number(p);
  q = Number(q);

  if (!uf.connected(p, q)) {
    console.log(`${p} + ${q}`);
    uf.union(p,q);
    console.log( uf.getList() );
  } else {
    console.log(`${p} <=> ${q}`);
  }
});

// uf.union(3,4);
// uf.union(4,1);
// uf.union(4,5);
//
// uf.union(7,8);
//
// console.log( uf.connected(3,7) );

console.log( uf.getList() );
