import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api';

export async function getItems(): Promise<any[]> {
  try {
    const value = await AsyncStorage.getItem('@objetos');
    const res = value !== null ? JSON.parse(value) : [];
    return res;
  } catch (e) {
    console.log('Erro ao recuperar objetos:', e);
    return [];
  }
}

export async function adicionarObjeto(
  codigo: string,
  nome: string,
  objeto: unknown,
): Promise<void> {
  const newData = {
    eventos: objeto,
    id: codigo,
    name: nome,
  };

  try {
    const value = await AsyncStorage.getItem('@objetos');
    const objetos = value !== null ? JSON.parse(value) : [];

    // Verificar se já existe um objeto com o mesmo ID
    const index = objetos.findIndex((obj: { id: string }) => obj.id === codigo);

    if (index !== -1) {
      // Se já existe, atualiza o objeto existente
      const nomeAtual: string = objetos[index].name;
      if (nome !== '') {
        objetos[index] = {
          eventos: objeto,
          id: codigo,
          name: nome,
        };
      } else {
        objetos[index] = {
          eventos: objeto,
          id: codigo,
          name: nomeAtual,
        };
      }

      await AsyncStorage.setItem('@objetos', JSON.stringify(objetos));
      console.log('Objeto atualizado com sucesso!');
    } else {
      // Se não existe, adiciona o novo objeto
      objetos.push(newData);
      await AsyncStorage.setItem('@objetos', JSON.stringify(objetos));
      console.log('Objeto adicionado com sucesso!');
    }
  } catch (e) {
    console.log('Erro ao adicionar objeto:', e);
  }
}

export async function fecthObjeto(codigo: string, nome: string) {
  const codRastreio = codigo.toUpperCase();
  try {
    const response = await api.get(`/rastreio?cod=${codRastreio}`);
    await adicionarObjeto(codRastreio, nome, response.data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    // return e;
    console.log('Erro ao deletar objeto:', e);
  }
}

export async function deletarObjetoById(id: string): Promise<void> {
  try {
    const value = await AsyncStorage.getItem('@objetos');
    const objetos = value !== null ? JSON.parse(value) : [];

    // Verificar se o objeto com o ID existe
    const objetoIndex = objetos.findIndex(
      (obj: { id: string }) => obj.id === id,
    );
    if (objetoIndex === -1) {
      throw new Error(`Não foi encontrado um objeto com o ID ${id}`);
    }

    // Remover o objeto com o ID especificado
    objetos.splice(objetoIndex, 1);

    await AsyncStorage.setItem('@objetos', JSON.stringify(objetos));
    console.log(`Objeto com o ID ${id} deletado com sucesso!`);
  } catch (e) {
    console.log('Erro ao deletar objeto:', e);
  }
}

export async function deletarTodosObjetos(): Promise<void> {
  try {
    await AsyncStorage.removeItem('@objetos');
    console.log('Objetos deletados com sucesso!');
  } catch (e) {
    console.log('Erro ao deletar objetos:', e);
  }
}
