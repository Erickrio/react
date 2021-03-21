import React , { useEffect, useState }from 'react'
import Button from '../../shared/Button'
import Form from '../../shared/Form'
import Input from '../../shared/Input/Input'
import { Product} from '../../shared/Table/Table.mockdata'

declare interface InitialFormState {
  id?: number
  name: string
  price: string
  stock: string
}

export interface ProductCreator {
  name: string
  price: number
  stock: number
}

declare interface ProductFormProps {
   //returilização de props
  form?: Product
  onSubmit?: (product: ProductCreator) => void
  onUpdate?: (product: Product) => void
}

const ProductForm: React.FC<ProductFormProps> = (props) => {
  const initialFormState: InitialFormState = props.form
  //operação ternaria - se props exstir -  passa um determado valor
    ? {
        id: props.form.id,
        name: props.form.name,
         //FORÇA O PRICE SER UMA STRING()
        price: String(props.form.price),
        stock: String(props.form.stock),
      }
    : {
        name: '',
        price: '',
        stock: ''
      }

  const [form, setForm] = useState(initialFormState)

  useEffect(()=>{
    setForm(initialFormState)
  },[props.form])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    setForm({
      ...form,
      [name]: value
    })
  }
  //criando método
  const updateProduct = (product: InitialFormState) => {
    const productDto = {
      id: Number(product.id),
      name: String(product.name),
      price: parseFloat(product.price),
      stock: Number(product.stock)
    }
 //verifica se existe (executa o método)
    props.onUpdate &&
      props.onUpdate(productDto)
  }

  const createProduct = (product: InitialFormState) => {
    const productDto = {
      name: String(product.name),
      price: parseFloat(product.price),
      stock: Number(product.stock)
    }

    props.onSubmit &&
      props.onSubmit(productDto)
  }
  //se meu form (existir) atualiza
  const handleFormSubmit = () => {
    form.id
      ? updateProduct(form)
     //se não, eu quero criar 
      : createProduct(form) 
    
    setForm(initialFormState)
  }

  return <Form onSubmit={handleFormSubmit}>
    <Input
      onChange={handleInputChange}
      value={form.name}
      name="name"
      label="Name"
      placeholder="E.g.: Cookie"
      required
    />
    <Input
      onChange={handleInputChange}
      value={form.price}
      name="price"
      label="Price"
      type="number"
      step="0.01"
      min="0"
      placeholder="E.g.: 1.25"
      required
    />
    <Input
      onChange={handleInputChange}
      value={form.stock}
      name="stock"
      label="Stock"
      type="number"
      min="0"
      placeholder="E.g.: 15"
      required
    />
    <Button>
      Submit
    </Button>
  </Form>
}

export default ProductForm