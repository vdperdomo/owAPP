import React from 'react'
import { StyleSheet, Text, FlatList, View, TouchableOpacity } from 'react-native';
import { Content, List, ListItem,  Left, Right, Grid, Row, Col, Item } from 'native-base';
import variable from './../assets/native-base-theme/variables/platform';
import Icon from 'react-native-vector-icons/FontAwesome5';


const TableComponent = (props) => {
    const data = props.data;
    const titles = props.titles;
    const keys = props.keys;

    const titleComponent = titles.map((title, index) => 
        <Text key={ Math.random() } style={ [s.cell, s.header, { width: props.columnsSize[index] }] }> { title } </Text>
    )

    return (
        <View>
            <View style={ s.filter }>
                <Icon name="filter"  style={ s.icon } onPress={props.filterBy} />
                <Icon name="sort-amount-down"  style={ s.icon } onPress={props.orderBy}/>
            </View>
            <List>
                <ListItem style={ s.row } key='title'>
                    { titleComponent }
                </ListItem>
            </List>
            <FlatList
                data={ data }
                renderItem={ ({ item, index }) => getRow(props, item, index) }
                keyExtractor={ item => (item.id).toString() }
            />
        </View>
    )
}

const getRow = (props, row, index) => {

    const cells = getCells(props,row);

    const rowStyles = [s.row];

    if(index%2 == 0) rowStyles.push(s.rowOdd)

    return (
        <ListItem style={rowStyles}>
            <TouchableOpacity style={s.touch} onPress={() => props.selectItem(row)}>
                {cells}
                <Right style={{flex: 1}}><Icon style={s.arrow} name="arrow-right"/></Right>
            </TouchableOpacity>
        </ListItem>
    )
}

const getCells = (props, row)=> {
    return props.keys.map((key, index) => <Text key={ index } style={ [s.cell, { width: props.columnsSize[index] }] }>{ row[key] }</Text>);
}


const s = StyleSheet.create({
    header: {
        fontWeight: "bold",
        textTransform: "capitalize",
        paddingTop: 8,
        paddingBottom: 8,
        color: '#222'
    },  
    filter: { 
        //alignSelf: "flex-end", 
        flexDirection: "row",
        marginBottom: 10
    },
    icon: {
        color: "#aaa",
        paddingRight:5
    },
    row: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 0,
        paddingLeft: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginVertical: 2,
        marginLeft: 0,
        borderBottomWidth: 0
    },
    rowOdd: {
        backgroundColor: '#fafafa'
    },
    cell: {
        paddingRight: 10,
        color: '#7e7e88'
    },
    arrow: {
        color: variable.brandPrimary,
        width: 35,
        paddingRight: 15
    },
    touch: {
        width: '100%',
        flexDirection: 'row'
    }
});
export default TableComponent;