import React from 'react';

function ListItem(props) {
    return <td>{props.value}</td>
}

export default function PokeList(props) {
    const lists = props.item;
    let listItems = [];
    let i=0;
    for (let list in lists) {
        if (i===1) {
            listItems[1]=<ListItem key={list.toString()}
                                   value={<img src={lists[list]} alt=""/>}/>
            i++;
        } else {
            listItems[i] = <ListItem key={list.toString()}
                                     value={lists[list]}/>
            i++;
        }
        }
        return (
            <tr>
                {listItems}
            </tr>
        )
        }