import { useLocation } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { StyledLink } from "./BackButton.styled";

export const BackButton = ({ children }) => {
    /*  з використанням функції useLocation(), отримується
     поточний URL сторінки та зберігається в змінній 
     location. Далі, за допомогою оператора ?., 
     звертаємось до властивості state зі змінної location,
      що містить інформацію про попередню сторінку. Якщо 
      така інформація є, то отримуємо URL попередньої 
      сторінки та зберігаємо його в змінну backLinkHref. 
      Якщо ж інформація відсутня, то встановлюємо URL 
      сторінки за замовчуванням ("/"). */
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    return <StyledLink to={backLinkHref}>
        <BsArrowLeft size={16} />
        {children}</StyledLink>
};