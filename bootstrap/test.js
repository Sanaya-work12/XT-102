const s={
    manager: 'xyz'
}
const associate1 = Object.create(s);
delete associate1.manager;
console.log(associate1.manager);