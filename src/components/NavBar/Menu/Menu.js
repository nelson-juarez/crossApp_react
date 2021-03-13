import ItemMenu from '../ItemMenu/ItemMenu';

const arItems = [
  {'link': 'home', 'label': 'Home'},
  {'link': 'planning', 'label': 'Planning'},
  {'link': 'registros', 'label': 'Registros'},
  {'link': 'usuarios', 'label': 'Usuarios'},
  {'link': 'contacto', 'label': 'Contacto'},
];

const Menu = () => {
  return (
    
      <nav className="my-2 my-md-0 me-md-3">
        {
          arItems.map((item) => (
            <ItemMenu link={item.link} label={item.label}></ItemMenu>
          ))
        }
      </nav>
    
  )
}

export default Menu;