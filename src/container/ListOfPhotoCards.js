import  { withPhotos } from '../components/hoc/withPhotos';
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

// Este componente se encarga de hacer el fetch de datos con el hoc, 
// ListOfPhotoCardsComponents se encarga de envolver el componente ListOfPhotoCards para pasarle la info

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);