import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Form from './styles/Form'
import formatMoney from '../lib/formatMoney'

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`

export default class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0
  }

  onChange = (e) => {
    const { name, type, value } = e.target
    const val = type === 'number' ? parseFloat(value) : value
    this.setState({ [name]: val })
  }

  onSubmit = (e) => {
    e.preventDefault()


  }

  render () {
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        {(createItem, { loading, error }) => (
          <Form onSubmit={this.onSubmit}>
            <fieldset>
              <label htmlFor='title'>
                Title
            <input
                  onChange={this.onChange}
                  type='text'
                  id='title'
                  name='title'
                  placeholder='Title'
                  required
                  value={this.state.title} />
              </label>
              <label htmlFor='price'>
                Price
            <input
                  onChange={this.onChange}
                  type='number'
                  id='price'
                  name='price'
                  placeholder='Price'
                  required
                  value={this.state.price} />
              </label>
              <label htmlFor='price'>
                Description
            <textarea
                  onChange={this.onChange}
                  type='description'
                  id='description'
                  name='description'
                  placeholder='Enter description'
                  required
                  value={this.state.description} />
              </label>
              <button>Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    )
  }
}

export { CREATE_ITEM_MUTIATION }