/* eslint-disable no-return-assign */

interface Contact {
  name: string;
  text: string;
  value: string;
}

interface Food {
  name: string;
  filename: string;
}

interface State {
  address: string;
  visi: string;
  misi: string;
  video: string;
  aboutUs: string[];
  contacts: Contact[];
  foods: Food[]
}
export const state = (): State => ({
  address: '',
  visi: '',
  misi: '',
  video: '',
  aboutUs: [],
  contacts: [],
  foods: []
})

export const mutations = {
  setContacts: (state: State, contacts: Contact[]) => state.contacts = contacts,
  setAboutUs: (state: State, aboutUs: string[]) => state.aboutUs = aboutUs,
  setFoods: (state: State, foods: Food[]) => state.foods = foods,
  setAddress: (state: State, address: string) => state.address = address,
  setVisi: (state: State, visi: string) => state.visi = visi,
  setMisi: (state: State, misi: string) => state.misi = misi,
  setVideo: (state: State, video: string) => state.video = video
}
