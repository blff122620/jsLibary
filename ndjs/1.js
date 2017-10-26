var name = "jay"; //一看这二逼就是周杰伦的死忠粉
var person = {
    name: "kang",
    pro: {
        name: "Michael",
        getName: function() {
            return this.name;
        }
    }
};
console.log(person.pro.getName());
var pepole = person.pro.getName;
console.log(pepole());
