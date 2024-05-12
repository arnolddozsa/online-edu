"use strict";

const { MongoClient } = require('mongodb');


class MongoContext {
    /**
     * 
     * @param {MongoClient} connection 
     */
    constructor(connection) {
        this.con = connection;
        this.db = this.con.db("onlineedu");
        this.transactionDepth = 0;
    }

    async Add(obj) {
        var mysql = this;
        // var $this = new objectType();

        var classname = this._createClassName(obj);
        var collec = this.db.collection(classname);

        var res = await collec.insertOne(obj);
        obj._id = res.insertedId;
        return obj;

    }

    _createClassName(obj) {
        return obj.constructor.name.toLowerCase().replace(new RegExp("[\']*", "g"), "");
    }

    async Update(obj) {
        var classname = this._createClassName(obj);

        var collec = this.db.collection(classname);
        return await collec.updateOne({ _id: obj._id }, { $set: obj });

    }

    async Delete(obj) {
        var classname = this._createClassName(obj);

        var collec = this.db.collection(classname);
        return await collec.deleteOne({ _id: obj._id });
    }


    async Get(objectType, searchParams) {


        var $this = new objectType();

        var classname = this._createClassName($this);
        var collec = this.db.collection(classname);

        var result = await collec.find(searchParams).toArray();


        if (result.length > 1) {
            throw new Error(`${classname} returns more than one item (searchParams: ${JSON.stringify(searchParams)})`);
            return;
        }

        if (result.length == 0) {
            throw new Error(`${classname} item not found (searchParams: ${JSON.stringify(searchParams)})`);
            return;
        }

        var obj = result[0];

        for (var property in obj) {

            if (obj.hasOwnProperty(property)) {
                $this[property] = obj[property];
            }
        }

        return $this;
    }

    async GetList(objectType, searchParams, orderBy = null, limit = null) {

        var $this = new objectType();
        var classname = this._createClassName($this);
        var collec = this.db.collection(classname);

        var result = await collec.find(searchParams).toArray();


        var objList = [];


        for (var row in result) {
            var obja = new objectType();

            if (result.hasOwnProperty(row)) {

                for (var property in result[row]) {

                    if (result[row].hasOwnProperty(property)) {
                        obja[property] = result[row][property];
                    }
                }
                objList.push(obja);
            }
        }

        return objList;

    }
}


module.exports = {
    MongoContext: MongoContext
};