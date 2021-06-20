const { Field } = require("@igomoon/hubspot-fields-js");

module.exports = [

    Field.text()
        .name("title", "Title")
        .default("Text"),

    Field.richText()
        .name("text", "Text")
        .default("<p>This is just some placeholder text in a rich text field</p>")

]