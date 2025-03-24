import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BtnButton from "../../Reusable/BtnButton";
import { useDispatch } from "react-redux";
import {
  updataBlogReduxHandler,
  deleteBlogReduxHandler,
} from "../../redux/slices/BlogSlice";
import { toast } from "react-toastify";

function ViewBlogPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  let obj;
  const { AllblogData, loding, message, error, updateSuccess, deleteSuccess } =
    useSelector((state) => state.blog);
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [formValue, setFormValue] = useState(null);
  const [deleteStatus, setDeleteStatus] = useState(false);

  // console.log(params)

  function colorGenerator() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let bg = `rgba(${red},${green},${blue},0.1)`;
    let text = `rgb(${red},${green},${blue})`;

    return {
      bg,
      text,
    };
  }

  function getData() {
    if (AllblogData) {
      const response = AllblogData.filter((data) => data.id === params.id);

      setData(response[0]);

      // console.log(response);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  // console.log(data);

  useEffect(() => {
    setFormValue(
      (obj = {
        authorName: data?.authorName,
        title: data?.title,
        genere: data?.genere,
        source: data?.source,
        blogData: data?.blogData,
        tags: data?.tags,
      })
    );
  }, [isEdit]);

  //********** */ updating feature implementation ************************************/

  const isEditHandler = () => {
    setIsEdit(true);
    console.log(formValue);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const saveHandler = () => {
    formValue.id = params.id;
    // console.log(formValue);
    dispatch(updataBlogReduxHandler(formValue));
  };

  /**********************   deleting blog implementation **************************/

  const deleteHandler = () => {
    setDeleteStatus(true);
    dispatch(deleteBlogReduxHandler(params.id));
  };

  useEffect(() => {
    let id;

    // if (message) {
    //   toast.success(message);
    // }
    if (updateSuccess && isEdit) {
      id = setTimeout(() => {
        navigateTo("/");
        setIsEdit(false);
        toast.success(message);
      }, 1000);
    }
    if (deleteSuccess && deleteStatus) {
      setDeleteStatus(false);
      toast.success(message);
      navigateTo("/");
    }

    if (error) {
      toast.warning(message);
    }

    return () => clearTimeout(id);
  }, [error, message, updateSuccess, loding]);

  return (
    <div className="w-full pt-15 px-4 md:px-10">
      {/* left section */}

      {data && (
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-6/12 space-y-4">
            <div className="w-full">
              <img
                src={data?.imageUrl}
                alt="blog image"
                className="rounded-md md:h-[417px] md:w-[616px]  object-cover"
              />
            </div>

            <div className="flex flex-row justify-between text-lg text-purple-600 w-full md:w-10/12 font-semibold md:gap-6 gap-4">
              {isEdit ? (
                <input
                  type="text"
                  placeholder="Enter Author name"
                  name="authorName"
                  className="border border-gray-400 rounded-md text-sm outline-none px-2 py-0"
                  value={formValue?.authorName}
                  onChange={inputHandler}
                />
              ) : (
                <p className="capitalize">{data.authorName}</p>
              )}
              <p>{new Date(data.publishDate).toDateString()}</p>
            </div>

            <div className="flex flex-row flex-wrap gap-4 w-full">
              {isEdit ? (
                <input
                  placeholder="tag1, tag2 ,tag3"
                  name="tags"
                  className="border border-gray-400 rounded-md outline-none px-2 py-1"
                  value={formValue?.tags}
                  onChange={inputHandler}
                />
              ) : data?.tags ? (
                data.tags.split(",").map((item, index) => {
                  const color = colorGenerator();
                  // console.log(color)

                  return (
                    <span
                      key={index}
                      className="rounded-full px-2"
                      style={{
                        background: color.bg,
                        color: color.text,
                      }}
                    >
                      {item}
                    </span>
                  );
                })
              ) : (
                Array(4)
                  .fill(0)
                  .map((item, index) => {
                    const color = colorGenerator();
                    // console.log(color)

                    return (
                      <span
                        key={index}
                        className="rounded-full px-2"
                        style={{
                          background: color.bg,
                          color: color.text,
                        }}
                      >
                        {`Blog ${index}`}
                      </span>
                    );
                  })
              )}
            </div>

            <div className="flex w-full flex-row justify-around md:justify-start text-orange-400 capitalize font-semibold gap-3 md:gap-8">
              <div>
                {isEdit ? (
                  <input
                    type="text"
                    placeholder="Enter Genere"
                    name="genere"
                    className="border border-gray-400 rounded-md outline-none px-2 py-1"
                    value={formValue?.genere}
                    onChange={inputHandler}
                  />
                ) : (
                  <p>{data?.genere && data?.genere}</p>
                )}
              </div>

              <div>
                {isEdit ? (
                  <input
                    type="text"
                    placeholder="Enter source"
                    name="source"
                    className="border border-gray-400 rounded-md outline-none px-2 py-1"
                    value={formValue?.source}
                    onChange={inputHandler}
                  />
                ) : (
                  <p>{data?.genere && data?.genere}</p>
                )}
              </div>
            </div>

            {data.uid == user?.uid && (
              <div className="flex flex-row gap-6 mt-4">
                {isEdit ? (
                  <div className="w-full flex justify-center">
                    {loding ? (
                      <div className="spinner"></div>
                    ) : (
                      <BtnButton
                        bgcolor={"orange"}
                        hovercolor={"blue"}
                        textcolor={"white"}
                        width={"full"}
                        handler={saveHandler}
                      >
                        Save
                      </BtnButton>
                    )}
                  </div>
                ) : (
                  <>
                    <BtnButton
                      bgcolor={"blue"}
                      hovercolor={"orange"}
                      textcolor={"white"}
                      width={"fit"}
                      handler={isEditHandler}
                    >
                      Update
                    </BtnButton>

                    <BtnButton
                      bgcolor={"red"}
                      hovercolor={"orange"}
                      textcolor={"white"}
                      width={"fit"}
                      handler={deleteHandler}
                    >
                      Delete
                    </BtnButton>
                  </>
                )}
              </div>
            )}
          </div>

          <div className="h-auto md:h-[570px] w-full md:w-6/12 md:overflow-y-auto space-y-2 mt-4 md:mt-0">
            {isEdit ? (
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Enter blog title"
                  name="title"
                  className="border border-gray-400 rounded-md outline-none px-2 py-1"
                  value={formValue?.title}
                  onChange={inputHandler}
                />

                <textarea
                  type="text"
                  placeholder="Enter blog data"
                  name="blogData"
                  className="border border-gray-400 rounded-md outline-none px-2 py-1 resize-none"
                  value={formValue?.blogData}
                  onChange={inputHandler}
                  rows={18}
                ></textarea>
              </div>
            ) : (
              <div>
                <h2 className="text-3xl text-center capitalize font-bold">
                  {data.title}
                </h2>
                <p>{data.blogData}</p>
              </div>
            )}
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet itaque ipsam quae, porro explicabo repellat nisi incidunt ex pariatur odio facere natus voluptates dicta enim est vero assumenda facilis, corporis minima. Neque reiciendis iste saepe voluptatibus esse totam harum sunt odit consequatur amet hic labore similique nostrum, laboriosam magnam molestiae, nulla sed non sit animi sint quos! Minima consequatur praesentium aliquam, vero eveniet earum, eligendi fugit sapiente neque possimus ex alias sint rem dolorum cum dolorem. Cumque deleniti esse expedita ipsum nostrum magnam, ad quis dolorem autem omnis doloribus rerum velit! Atque temporibus obcaecati voluptates? Veniam eaque atque mollitia blanditiis expedita iure impedit at tenetur soluta alias eveniet rerum architecto vel molestias ad, obcaecati neque tempore velit hic laborum? Perferendis, nostrum eos. Perferendis aliquam nihil dolorem non placeat? Distinctio deleniti nobis voluptatum, delectus iusto corrupti rerum amet id, officia obcaecati, quia ex eveniet reprehenderit molestias asperiores aliquid fuga in. Nostrum deleniti dolorem assumenda provident facilis repellat saepe vel deserunt nisi perspiciatis temporibus laudantium, iusto, sequi architecto voluptate. Ipsam voluptates minus veritatis. Earum nostrum, consequuntur fugiat exercitationem libero illo voluptatibus aperiam sequi. Reprehenderit magni sapiente quos ratione obcaecati consequatur, autem excepturi illum perspiciatis nulla incidunt quibusdam fugiat possimus neque culpa rerum, consequuntur labore porro saepe? Soluta sapiente voluptas, placeat perspiciatis, est possimus corrupti porro adipisci, commodi quidem quis? Est, voluptatum laudantium? Laboriosam corrupti veniam mollitia, placeat totam aperiam tenetur commodi molestias temporibus recusandae illo, modi, repudiandae deserunt earum molestiae animi accusantium nemo vero dolore. Ipsam repellat architecto, asperiores adipisci itaque voluptas a blanditiis, nemo molestiae amet ipsa obcaecati! Incidunt doloremque adipisci earum ullam cupiditate iste tempore blanditiis, nesciunt sed eaque voluptatem amet. Alias voluptate voluptas magni minus aspernatur nemo recusandae! Sapiente ullam assumenda accusamus ratione fugiat eveniet reprehenderit libero aut optio in corporis perspiciatis molestiae quibusdam voluptatem voluptates, qui temporibus. Eligendi voluptatibus mollitia, repellendus adipisci nisi ducimus nemo temporibus quos, suscipit ipsam dignissimos. Suscipit eligendi deleniti numquam architecto provident est excepturi repudiandae distinctio alias aspernatur aliquid debitis, repellat modi nobis minima a similique molestiae corrupti. Distinctio corporis nemo, neque modi molestiae et omnis at, aliquid cum temporibus delectus perferendis enim obcaecati alias vitae aperiam, unde ea ratione sint excepturi necessitatibus. Atque molestiae aspernatur similique repellendus labore consectetur, sint obcaecati, tenetur voluptas quo eligendi esse. Facere, illo magni? Suscipit magnam impedit nam iure incidunt laborum beatae doloremque ipsum eius, aliquid ipsam perspiciatis animi recusandae id similique consequuntur. Eum a culpa consequuntur vel. Dolores quia, in ea facere explicabo eius adipisci magnam dolorum veritatis ipsum, neque ratione! Rem delectus tenetur consequatur soluta id tempora repudiandae hic asperiores vitae accusamus dolor laboriosam, culpa et iure itaque impedit. Expedita debitis voluptates ea beatae consequatur, nulla, amet, quibusdam neque quo quas voluptas iure. Itaque iure beatae tenetur alias, minus suscipit esse exercitationem ut inventore eos. Nemo labore porro, hic consequuntur ut eum assumenda quidem aut voluptatem a vero, unde nesciunt fuga ipsam, velit quo ad doloremque enim ea provident veritatis iusto! Nihil labore mollitia cupiditate quod illo assumenda vitae et voluptates dolor ab dolore distinctio quis placeat eaque inventore, aliquam, magni, non debitis impedit. Maiores quas nulla facere dignissimos, tenetur numquam minus est enim non ipsum, dicta in quae fugiat adipisci repudiandae nobis corrupti doloremque quos velit et ipsam! Incidunt nisi expedita eaque quo voluptatibus quisquam nihil omnis laboriosam quidem, temporibus molestiae, maiores perferendis fugiat. Fugiat excepturi a officiis ratione, blanditiis veniam ullam eveniet aspernatur iusto, et odit nesciunt distinctio accusamus nemo? Porro praesentium sed hic laboriosam laudantium ut veritatis, aliquam minima id voluptas cupiditate voluptate distinctio, modi repellendus numquam. Esse repudiandae cupiditate velit accusantium facere dolores officiis modi quisquam natus eligendi at reprehenderit odit dolore adipisci commodi eius, asperiores praesentium suscipit, veniam similique? Consectetur earum recusandae veniam error fuga vitae dolorem minus quibusdam veritatis perspiciatis? Quisquam eveniet consequatur minus laborum, impedit cupiditate quasi corrupti quia architecto a excepturi distinctio assumenda optio. Incidunt tempore ratione amet deserunt perferendis neque. Distinctio vero, laudantium ad dolores culpa animi delectus asperiores, earum neque nobis corrupti dignissimos beatae ab veniam non soluta laborum impedit pariatur assumenda blanditiis obcaecati commodi possimus! Quidem officiis ipsam consectetur obcaecati in dolore, quam molestias minus voluptatem ratione sapiente! Vel nesciunt officia fugit mollitia dolorum veritatis a ipsa fuga modi sint non quam ipsam consectetur esse, ab distinctio pariatur sequi exercitationem ea in dolore repudiandae velit ipsum. Harum, nesciunt praesentium velit voluptate reprehenderit architecto dicta odio, repudiandae error at quibusdam autem delectus numquam magnam voluptatem natus commodi, nam quia! Perferendis, accusamus saepe! Libero dignissimos sunt unde quidem! Et perspiciatis deserunt tempora a vitae unde dicta ducimus asperiores voluptates excepturi, assumenda consequuntur nesciunt quibusdam voluptate recusandae cumque illum impedit aut. Quos deleniti in rerum, minus perspiciatis nobis illo ullam. Vitae exercitationem voluptatum repellendus rem laborum quaerat architecto illum hic atque quia, ipsum odit sunt placeat ipsam. Culpa, non rem? At maiores omnis culpa ducimus recusandae reprehenderit provident reiciendis blanditiis veritatis, et cupiditate tenetur sequi, illum ipsa natus, officiis tempora. Quo blanditiis sint repellat, sit tenetur dolorem laudantium! Molestias ducimus sint est, debitis odit alias laudantium odio possimus voluptates repellendus voluptatibus ut rerum quia qui incidunt excepturi optio dolorem vero. Tempora perferendis, quos, est libero veniam dolorum qui totam quam dolore aliquid ipsum fugit commodi? Quos eum suscipit id similique dolores! Commodi, porro. Eum earum culpa enim quisquam aliquam beatae blanditiis fugiat. Aspernatur veritatis eveniet hic ad voluptate, alias adipisci, quidem quibusdam amet, eos facere sit? Earum facilis nesciunt tempore, veritatis magni culpa repudiandae quisquam eius distinctio ipsam at labore, rerum aliquid sapiente. Asperiores, expedita quaerat aut doloribus est quasi eius! Debitis voluptates velit exercitationem nihil ad totam aspernatur obcaecati quasi in quam. Ullam incidunt accusantium, consequatur delectus quod velit nihil eveniet officiis molestias officia labore quisquam explicabo dicta quasi dolores dolorum amet, eius enim, rerum sunt facere ab harum totam culpa? Sed aspernatur eum quod cum quisquam ipsam sint temporibus nobis sapiente, eos soluta aliquid obcaecati, dolor fuga. Quo dolorem rem ea quis qui, numquam illo maiores fugiat commodi fugit quibusdam, in assumenda architecto inventore itaque accusamus magnam voluptatem. Facilis debitis voluptate adipisci libero, aliquid explicabo recusandae?</p> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewBlogPage;
