import React from 'react'
import styles from './table.module.scss'

interface TableType {
    thead : string[],
    tbody : string[][],
    onRowClick? : Function
}

export default function Table({ thead, tbody, onRowClick } : TableType) {
    return (
        <div className={styles.table}>
            <div className={styles.tableHeader}>
                <div className={styles.theadInner}>
                    {thead.map(val => <p key={val}>{val}</p>)}
                </div>
                <div className={styles.theadLine}></div>
            </div>
            {
                tbody.map((inner) => 
                    <div 
                        key = {inner.join()} 
                        className={styles.tableBody}
                        onClick={() => {
                            if(onRowClick)
                                onRowClick(inner[0])
                        }}
                    >
                    {inner.map(val => <p key = {val}>{val}</p>)}
                    </div>
                )
            }
        </div>
    )
}
