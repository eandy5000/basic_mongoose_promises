'use strict'
const assert = require('assert')
const User = require('../src/user')

describe('delete a user', () => {
    let joe

    beforeEach((done) => {
        joe = new User({name: "Joe"})
        joe.save()
           .then(() => done())
    })
    
    it('model instance remove', (done) => {
        //uses joe variable
        joe.remove()
           .then(() => User.findOne({name: "Joe"}))
           .then((user) => {
               assert(user === null)
               done()
           })
    })

    it('class method remove', (done) => {
        //uses User methods
        User.remove({name: "Joe"})
            .then(() => User.findOne({name: "Joe"}))
            .then((user) => {
                assert(user === null)
                done()
            })
    })

    it('class method findandremove', (done) => {
        User.findOneAndRemove({name: "Joe"})
            .then(() => User.findOne({name: "Joe"}))
            .then((user) => {
                assert(user === null)
                done()
            })
    })
    
    it('class method findbyidandremove', (done) => {
        User.findByIdAndRemove(joe._id)
            .then(() => User.findOne({name: "Joe"}))
            .then((user) => {
                assert(user === null)
                done()
            })
    })
})