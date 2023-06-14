import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';
import AppBar from './AppBar';
import Copyright from './Copyright';

const RecipeDetailPage = ({ recipe, onClose }) => {
  return (
    <Modal visible={true} onRequestClose={onClose}>
      <View style={styles.container}>
        <AppBar />
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>{recipe.title}</Text>
          <Image source={{ uri: recipe.image }} style={{ width: 300, height: 200,margin: 25, }} />
          <View style={styles.div}>
            <Text>Tempo de Preparo: {recipe.preparationTime}</Text>
            <Text>Nível de Dificuldade: {recipe.difficulty}</Text>
            <Text>Categoria: {recipe.category}</Text>
          </View>
          
          <View style={styles.divIngredientes}>
          <Text style={{ fontWeight: 'bold' }}>
            {recipe.portion ? `Ingredientes (${recipe.portion} porções)` : 'Ingredientes'} {/* Verifica se existe o recipe.portion */}
          </Text>
          {recipe.ingredients.map((section, index) => (
            <View key={index}>
              <Text style={{ fontWeight: '500', marginTop: 10 }}>{section.section}</Text>
              <Text>{section.items.join('\n')}</Text>
            </View>
          ))}
          </View>

          <View style={styles.divPreparo}>
          <Text style={{ fontWeight: '500'}}>Modo de Preparo</Text>
          {recipe.instructions.map((section, index) => (
            <View key={index}>
              <Text style={{ fontWeight: '500', marginTop: 10 }}>{section.section}</Text>
              <Text>{section.items.join('\n')}</Text>
            </View>
          ))}
          </View>
          <TouchableOpacity onPress={onClose} style={styles.divClose}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footer: {
    backgroundColor: '#F7EADD',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    padding: 5,
    fontWeight: 'bold',
    color:'#654321',
  },
  div: {
    backgroundColor: '#F7EADD',
    margin: 15,
    elevation: 2,
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
  },
  divIngredientes: {
    backgroundColor: '#F7EADD',
    margin: 15,
    elevation: 2,
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
  },
  divPreparo: {
    backgroundColor: '#F7EADD',
    margin: 15,
    elevation: 2,
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
  },
  divClose:{
    backgroundColor: '#F7EADD',
    margin: 15,
    elevation: 2,
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    width: 65,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});

export default RecipeDetailPage;
