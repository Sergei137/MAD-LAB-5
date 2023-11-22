import React from 'react';
import { SafeAreaView, Button, StyleSheet, View, ScrollView } from 'react-native';

import ToDoList from '../components/ToDoList'; // import ToDoList component
import ToDoForm from '../components/ToDoForm'; // import ToDoForm component
import MainLayout from '../layouts/MainLayout';

function HomeScreen({ navigation }) {
    const [tasks, setTasks] = React.useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);
    
    // add task to tasks array
    const addTask = (task) => { 
        setTasks([...tasks, task]);
    };
    
    return (
        <>
            <MainLayout>
                <SafeAreaView>

                    <ScrollView>
                      <ToDoList tasks={tasks} />
                    </ScrollView>

                    <View style={styles.form}>
                      <ToDoForm addTask={addTask} tasks={tasks}/>
                    </View>

                    <View style={{marginTop: 20}}>
                        <Button
                            title="Go to About"
                            onPress={() => navigation.navigate('About')}
                        />
                    </View>
                </SafeAreaView>   
            </MainLayout>
        </>
    )
}

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
});

export default HomeScreen;