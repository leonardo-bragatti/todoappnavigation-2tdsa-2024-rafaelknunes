import { useState } from "react";
import { TextInput, FlatList, Button, View, Text } from "react-native";

// Componente Tasks para gerenciar e exibir uma lista de tarefas
const Tasks = () => {
  // State para armazenar a tarefa atualmente inserida no TextInput
  const [task, setTask] = useState("");
  // State para armazenar a lista de tarefas
  const [tasks, setTasks] = useState<string[]>([]);

  // Função para adicionar uma nova tarefa à lista
  const add = () => {
    if (task.trim() !== "") { // Verifica se a tarefa não é uma string vazia
      setTasks([...tasks, task]); // Adiciona a tarefa à lista no fim da lista.
      setTask(""); // Limpa o TextInput
    }
  };

  // Função para limpar todas as tarefas da lista
  const clear = () => {
    setTasks([]); // Limpa a lista de tarefas
    setTask(""); // Limpa o TextInput, por consistência
  };

  // Renderiza o componente na tela
  return (
    <View style={{ marginTop: 20 }}> 
      <TextInput 
        onChangeText={setTask} // Define o texto da tarefa
        value={task} // Mostra o texto atual no TextInput
      />
      <Button title="+" onPress={add} /> 
      <Button title="Limpar" onPress={clear} /> 
      <FlatList // Lista que mostra as tarefas
        data={tasks} // Dados da lista
        renderItem={({ item }) => <Text>{item}</Text>} // Renderiza cada item como um Text
      />
    </View>
  );
};

export default Tasks; // Exporta o componente para uso em outros lugares do aplicativo
