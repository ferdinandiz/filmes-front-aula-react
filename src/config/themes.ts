export interface ThemeOption {
  id: string;
  name: string;
  background: string;
  panel: string;
  panelSoft: string;
  accent: string;
  accentStrong: string;
  text: string;
  textSoft: string;
  border: string;
}

export const themes: ThemeOption[] = [
  {
    id: 'ameixa',
    name: 'Ameixa Seca',
    background: '#f6f2ec',
    panel: '#ffffff',
    panelSoft: '#efe8dc',
    accent: '#322938',
    accentStrong: '#A14016',
    text: '#322938',
    textSoft: '#5f5964',
    border: '#cfc89a'
  },
  {
    id: 'salvia',
    name: 'Sálvia Sem Graça',
    background: '#f4f6f1',
    panel: '#ffffff',
    panelSoft: '#e7ece7',
    accent: '#89A194',
    accentStrong: '#322938',
    text: '#2f3431',
    textSoft: '#64706a',
    border: '#cfc89a'
  },
  {
    id: 'areia',
    name: 'Areia Molhadinha',
    background: '#978e5d',
    panel: '#fffdf8',
    panelSoft: '#f3eed5',
    accent: '#000000',
    accentStrong: '#d7cfad',
    text: '#3e3727',
    textSoft: '#726956',
    border: '#61572a'
  },
  {
    id: 'caramelo',
    name: 'Bala de Caramelo',
    background: '#895722',
    panel: '#fffefb',
    panelSoft: '#f6eadc',
    accent: '#CC883A',
    accentStrong: '#A14016',
    text: '#412b17',
    textSoft: '#70533a',
    border: '#e2c39d'
  },
  {
    id: 'verdinho',
    name: 'Black Esmeralda',
    background: '#332E1D',
    panel: '#5AC7AA',
    panelSoft: '#9ADCB9',
    accent: '#0d6f1c',
    accentStrong: '#50c878',
    text: '#332E1D',
    textSoft: '#332E1D',
    border: '#2e4f51'
  },
  {
    id: 'terracota',
    name: 'Terracota Feinho',
    background: '#000000',
    panel: '#fffdfa',
    panelSoft: '#f7e4db',
    accent: '#A14016',
    accentStrong: '#322938',
    text: '#3e2417',
    textSoft: '#7a5a4d',
    border: '#deb29e'
  }
];
