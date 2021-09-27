import CustomAccordion from "./CustomAccordion"


const headerStyle = {
    padding: 10,
    boxSizing : 'border-box',
    outline: `1px solid gray`,
    width: '100%',
    fontSize : 20,
}
const contentStyle = {
    ...headerStyle,
    background: '#f08080',
    fontSize : 12,
}

export default function App(){
    return <div>
                <CustomAccordion
                    style={{width : '80vw'}}
                >
                    <div style={headerStyle}>
                        abc
                    </div>
                    <div style={contentStyle}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero beatae ut placeat explicabo impedit! Consequatur eveniet nemo voluptas magni. Labore id distinctio odit molestias ab iure, placeat nulla tenetur ipsum.
                    </div>

                    <div style={headerStyle}>
                        bcd
                    </div>
                    <div style={contentStyle}>
                        123
                    </div>
                </CustomAccordion>

                <h2 style={{paddingTop: 100}}>Ну и с мультиопеном</h2>
                <CustomAccordion opendedInitial={[1,3]} multiopen={true}>
                    <div style={headerStyle}>
                            1
                    </div>
                    <div style={contentStyle}>
                        c1
                    </div>

                    <div style={headerStyle}>
                            2
                    </div>
                    <div style={contentStyle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse adipisci nesciunt est, recusandae cumque? Laudantium nisi harum, aperiam beatae ipsum nesciunt. Labore id itaque nisi maiores, nam inventore voluptas.
                        Perferendis laborum in maiores voluptatibus culpa vero voluptatem, ducimus animi veniam accusamus repudiandae obcaecati alias quo! Quisquam fuga sequi eius itaque repellat nobis id ducimus obcaecati natus? Fugit, tempora provident?
                        At quod incidunt blanditiis eos veniam, id nisi, facere rerum, expedita molestiae rem porro! Obcaecati voluptatum distinctio asperiores qui repellendus at animi, consequuntur, fuga quaerat ut modi quis laboriosam facilis.
                        Mollitia quas nostrum quo tempora numquam dolores nemo ad soluta aut nisi cum, autem hic rem possimus voluptatum unde dicta quae eligendi quisquam. Rem suscipit minima laborum ipsam pariatur. Fugit!
                        Laboriosam amet doloremque maxime dolore eos a iste dolorem at, blanditiis tempora aut consequatur veritatis iure cum, ad recusandae officiis fuga suscipit sapiente voluptatibus nam. In quidem laborum nemo deserunt.
                        Optio nobis officia a rerum earum impedit voluptatum aut iste necessitatibus excepturi dicta nisi in saepe vitae accusamus, quas odit quam molestiae harum sapiente minus debitis inventore ut? Quia, accusantium.
                        Non reprehenderit sint laboriosam iusto aliquam ipsam est nobis aperiam explicabo beatae excepturi, ratione porro, repellat a laudantium magnam dignissimos hic qui odit architecto aliquid obcaecati similique libero. In, aliquid.
                        Neque, iure esse. Officia asperiores nostrum laudantium, quisquam error earum fuga, totam sed quam, molestias vitae eveniet dicta magnam inventore quidem repellendus enim labore incidunt ut. Exercitationem numquam expedita amet!
                        Delectus vel molestias laboriosam! Harum dolores debitis quidem, aliquid necessitatibus repudiandae cum similique ex, atque quas non optio autem cupiditate sint ad sed asperiores ducimus amet earum et? Officiis, totam!
                        Voluptatibus, aliquid laboriosam ea quidem cum, eum in, ab error repudiandae dolorum ullam excepturi nulla quam. In illum, animi reprehenderit debitis sunt ipsam soluta recusandae quo itaque ea est fuga!
                    </div>

                    <div style={headerStyle}>
                            3
                    </div>
                    <div style={contentStyle}>
                        c3
                    </div>

                    <div style={headerStyle}>
                            4
                    </div>
                    <div style={contentStyle}>
                        c4
                    </div>

                    <div style={headerStyle}>
                            5
                    </div>
                    <div style={contentStyle}>
                        c5
                    </div>
                </CustomAccordion>
            </div>
    

}