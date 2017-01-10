'use strict'
const assert = require('assert')
const User = require('../src/user')

describe('updating records', () => {
    let joe

    beforeEach((done) => {
        joe = new User({name: "Joe"})
        joe.save()
           .then(() => done())
    })

    it('instance type using set and save', (done) => {
        joe.set('name', 'Bill')
        joe.save()
           .then(() => User.find({}))
           .then((users) => {
               assert(users.length === 1)
               assert(users[0].name === 'Bill')
               done()
           })

    })

    it('A model instance can update', (done) => {
        joe.update({name: "Bill"})
           .then(() => User.find({}))
           .then((users) => {
               assert(users.length === 1)
               assert(users[0].name === 'Bill')
               done()               
           })
    })

    it('a model class can update', (done) => {
        User.update({name: "Joe"}, {name: "Bill"})
           .then(() => User.find({}))
           .then((users) => {
               assert(users.length === 1)
               assert(users[0].name === 'Bill')
               done()   
            })
    })
    
    it('a model class can update one record', (done) => {
        User.findOneAndUpdate({name: "Joe"}, {name: "Bill"})
           .then(() => User.find({}))
           .then((users) => {
               assert(users.length === 1)
               assert(users[0].name === 'Bill')
               done()   
            })
    })
    
    it('a model class can find by id and update', (done) => {
        User.findByIdAndUpdate(joe._id, {name: "Bill"})
           .then(() => User.find({}))
           .then((users) => {
               assert(users.length === 1)
               assert(users[0].name === 'Bill')
               done()   
            })
    })
})