import React, { Component } from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import Router from "next/router"
import Form from "./styles/Form"
import Error from "./ErrorMessage"
import formatMoney from "../lib/formatMoney"

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

class CreateItem extends Component {
	state = {
		title: "",
		description: "",
		image: "",
		largeImage: "",
		price: 0
	}

	onChange = e => {
		const { name, type, value } = e.target
		const val = type === "number" ? parseFloat(value) : value
    this.setState({ [name]: val })
	}

  uploadFile = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append('upload_preset', 'ngndtnp7')
    const result = await fetch
      ("https://api.cloudinary.com/v1_1/paulinag/image/upload", {
        method: "POST",
        body: data
      })
    const file = await result.json()
    console.log(file)
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    })
  }

	render() {
		return (
			<Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
				{(createItem, { loading, error }) => (
					<Form
						onSubmit={async e => {
							e.preventDefault()
							const result = await createItem()
							Router.push({
								pathname: "/item",
								query: { id: result.data.createItem.id }
							})
						}}
					>
						<Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label
                htmlFor="file"
                id="file"
                name="file"
                placeholder="Upload an image"
                value={this.state.file}
                onChange={this.onChange}
              />
              {this.state.image && <img width='200'src={this.state.image} alt='upload preview' />}
							<label htmlFor="title">
								Title
								<input
									onChange={this.uploadFile}
									type="file"
									id="file"
									name="file"
									placeholder="Upload an image"
									required
								/>
							</label>
							<label htmlFor="price">
								Price
								<input
									onChange={this.onChange}
									type="number"
									id="price"
									name="price"
									placeholder="Price"
									required
									value={this.state.price}
								/>
							</label>
							<label htmlFor="description">
								Description
								<textarea
									onChange={this.onChange}
									type="description"
									id="description"
									name="description"
									placeholder="Enter a description"
									required
									value={this.state.description}
								/>
							</label>
							<button>Submit</button>
						</fieldset>
					</Form>
				)}
			</Mutation>
		)
	}
}

export default CreateItem
export { CREATE_ITEM_MUTATION }
