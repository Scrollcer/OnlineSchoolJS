//Task - Create super class MultiTool with following methods: cut, slice, screw
//Create child class CheepMultiTool
//Create child class ExpensiveMultiTool which extends methods of MultiTool class (adds drill method)
//Rules for usage:
//1) CheepMultiTool has 100 points of endurance.
//2) ExpensiveMultiTool has 250 points of endurance.
//3) Any instrument can be used until it has enough endurance.
//4) Call of any method of the instrument uses some points of its endurance.
//|-----------------------------------------------------
//|                  | Cut | Slice | Screw | Drill |
//|CheepMultiTool    | 10  |   15  |  20   |       |
//|ExpensiveMultiTool| 5   |   5   |  5    |  10   |
//|----------------------------------------------------
//5) After full usage instrument will break
//6) Call of any method of the instrument outputs message to the console (console.log)
//7) Call of any method of the broken instrument outputs error message (console.error)

class MultiTool {

    cut(isFunctional) {
        if (isFunctional) {
            console.log('Cut-cut')
        } else {
            console.error('MultiTool is broken!')
        }
    }

    slice(isFunctional) {
        if (isFunctional) {
            console.log('Slice-slice')
        } else {
            console.error('MultiTool is broken!')
        }
    }

    screw(isFunctional) {
        if (isFunctional) {
            console.log('Screw-screw')
        } else {
            console.error('MultiTool is broken!')
        }
    }
}

class CheepMultiTool extends MultiTool {
    constructor() {
        super()
        this.endurance = 100
    }

    anyAction(breakPoints, action) {
        if (this.endurance > 0) {
            action(true)
            this.endurance -= breakPoints
        } else {
            action(false)
        }
    }

    cut() {
        this.anyAction(10, super.cut)
    }

    slice() {
        this.anyAction(15, super.slice)
    }

    screw() {
        this.anyAction(20, super.screw)
    }
}

class ExpensiveMultiTool extends MultiTool {
    constructor() {
        super()
        this.endurance = 250
    }

    anyAction(breakPoints, action) {
        if (this.endurance > 0) {
            action(true)
            this.endurance -= breakPoints
        } else {
            action(false)
        }
    }

    cut() {
        this.anyAction(5, super.cut)
    }

    slice() {
        this.anyAction(5, super.slice)
    }

    screw() {
        this.anyAction(5, super.screw)
    }

    drill() {
        if (this.endurance > 0) {
            this.endurance -= 10
            console.log('Drilling')
        } else {
            console.error('MultiTool is broken!')
        }
    }
}

const tool = new CheepMultiTool()
const tool2 = new ExpensiveMultiTool()
tool.screw()
tool.cut()
tool.slice()
tool.slice()
tool.screw()
tool.slice()
tool.screw()
tool.cut()

tool2.drill()
tool2.cut()
tool2.slice()
tool2.screw()
tool2.drill()

