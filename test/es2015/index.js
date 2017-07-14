import assert from 'assert'
import React from 'react'
import {
    Accordion as Accordion2,
    Accordion,
    List
} from '../..'

assert(
    <Accordion2 prefixCls=''>
        <Accordion2.Panel>
        </Accordion2.Panel>
    </Accordion2>
)

assert(<List />)

console.log('es2015 ok')
