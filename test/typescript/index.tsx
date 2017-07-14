import * as assert from 'assert'
import * as React from 'react'
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

console.log('typescript ok')
