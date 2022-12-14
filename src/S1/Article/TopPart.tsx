import React from 'react'
import { Button } from '../../Common/Button/Button';
import { Q_h2_span } from '../../Common/TextComponents/twoHTML/Q_h2_span';
import { Compass_void } from '../../images/SVG/compass_void';
import s from './topPart.module.scss'

export function TopPart() {

    const content = ['Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'Lorem ipsum dolor sit.'];

    return (
        <div className={s.article}>
            <Q_h2_span name={s.wrapper}>
                {content}
            </Q_h2_span>
            <Button iconStylees={{ backgroundColor: '#e89400' }} icon={<Compass_void />} name={s.more}>
                Read more
            </Button>
        </div>
    )
}