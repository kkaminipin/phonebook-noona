import ContactItem from '../ContactItem';
import SearchBox from '../SearchBox';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  return (
    <div>
      <SearchBox />
      {contactList.map((item, i) => (
        <ContactItem item={item} key={i} />
      ))}
    </div>
  );
};

export default ContactList;
