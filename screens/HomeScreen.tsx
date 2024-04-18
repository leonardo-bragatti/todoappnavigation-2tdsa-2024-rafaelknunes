import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import { HomeScreenProps, Task } from '../types'; // Importa os tipos definidos para as props e Task

// Define o componente HomeScreen usando TypeScript para tipagem das props
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  // useState para gerenciar o estado da tarefa atual (input)
  const [task, setTask] = useState<string>('');
  // useState para gerenciar a lista de tarefas
  const [tasks, setTasks] = useState<Task[]>([]);

  // Função para adicionar uma nova tarefa à lista
  const addTask = () => {
    // Cria uma nova tarefa com a data atual (como string) e adiciona à lista de tarefas
    setTasks([...tasks, { name: task, createdAt: new Date().toISOString(), isFinished: false }]);
    // Limpa o campo de input após adicionar a tarefa
    setTask('');
  };

  // Renderiza o componente na tela
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        placeholder="Adicionar uma tarefa" // Placeholder do campo de texto
        value={task} // Valor atual do campo de texto
        onChangeText={setTask} // Atualiza o estado da tarefa quando o texto muda
        style={{ width: '90%', borderColor: 'gray', borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Adicionar" onPress={addTask} /> 
      <FlatList
        data={tasks} // Dados da lista de tarefas
        keyExtractor={(item, index) => index.toString()} // Extrator de chave para cada item da lista
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TaskDetails', { task: item })}>
            <Text>{item.name}</Text> 
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen; // Exporta o HomeScreen para uso em outros locais do aplicativo
