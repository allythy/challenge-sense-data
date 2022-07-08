import * as Yup from "yup";

export const schema = Yup.object().shape({
  title: Yup.string().required("Campo obrigatório"),
  value: Yup.number()
    .required("Campo obrigatório")
    .min(1, "O valor tem que ser maior que 0"),
  type: Yup.string().required("Escolha o tipo de ..."),
  category: Yup.string().required("Campo obrigatório"),
});
