import Image from "next/image";
import Link from "next/link";
import Arrow from "@/assets/images/arrow_1.png";
import Petur from "@/assets/images/petur_top.png";
import Ring from "@/assets/images/ring.png";
import ArrowRight from "@/assets/images/arrow_right.png";
import DoubleRing from "@/assets/images/double_rings.png";
import Divider from "@/assets/images/timeline_divider.png";
import DoubleCup from "@/assets/images/double_cup.png";
import Plate from "@/assets/images/plate.png";
import Mario from "@/assets/images/girls/mario.PNG";
import DoubleArrow from "@/assets/images/double_arrow.png";
import Whatsapp from "@/assets/images/whatsapp.png";
import dynamic from "next/dynamic";
import Form from "./form";
const Countdown = dynamic(() => import("./countdown"), { ssr: false });

export default function Home() {
  return (
    <>
      <section className="top_section">
        <div className="background_img_1"></div>
        <div className="top">
          <Image alt="petur" src={Petur} height={135} width={135} />
          <div className="names">
            <p className="regular animation_l_to_r">ՀՐԱՉ</p>
            <p className="wien animation_b_to_t">ԵՎ</p>
            <p className="regular animation_r_to_l">ՌՈՒԶԱՆՆԱ</p>
          </div>
          <span className="divider"></span>
          <div className="reason">
            <p className="wien we_are_marry animation_r_to_l">
              մենք ամուսնանում ենք
            </p>
            <p className="regular date animation_l_to_r">14 | 04 | 2024</p>
          </div>
          <Image
            className="arrow"
            alt="arrow"
            width={37}
            height={37}
            src={Arrow}
          />
        </div>
      </section>
      <section>
        <div className="background_img_2"></div>
        <div className="info">
          <p className="wien title animation_small_to_n">Հարգարժան հյուրեր</p>
          <p className="regular desc">
            Մենք ճակատագրից ստացել ենք ամենամեծ նվերը. մեր սրտերը սիրո թակարդում
            են, մեր հոգիները երջանկություն գտան միմյանց մեջ:
            <br />
            Մենք շատ ուրախ կլինենք, եթե դուք մեզ հետ լինեք և կիսեք մեր
            երջանկությունը:
          </p>
          <p className="wien sub animation_small_to_n">Ապրիլ 2024</p>

          <table>
            <tbody>
              <tr>
                <th>Եկ</th>
                <th>Եք</th>
                <th>Չո</th>
                <th>Հի</th>
                <th>Ու</th>
                <th>Շա</th>
                <th>Կի</th>
              </tr>
              <tr className="first_row">
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
              </tr>
              <tr>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>
                  14
                  <Image
                    className="ring"
                    alt="ring"
                    width={64}
                    height={64}
                    src={Ring}
                  />
                </td>
              </tr>
              <tr>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
              </tr>
              <tr>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
              </tr>
              <tr>
                <td>29</td>
                <td>30</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <div className="place">
          <p className="wien title animation_small_to_n">Հանդիպման վայրը</p>
          <p className="regular place_text animation_small_to_n">
            «Վիլլա ՌԵՍՏՈՐԱՆ» <br />
            Կոտայքի մարզ, Ջրվեժ համայնք,
            <br />
            15-րդ փողոց, 10/2 շենք
          </p>
          <Link
            className="map_link animation_small_to_n"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/dir//Villa+Restaurant+Complex+10%2F2,+15+Yerevan+0089/@40.1866321,44.6026052,357m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x406aa4a1140b4019:0xf0bcc60528784d89!2m2!1d44.6034511!2d40.1864396?entry=ttu"
          >
            <p className="regular map_link_text">Տեսնել քարտեզի վրա</p>
            <Image alt={"arrow"} src={ArrowRight} />
          </Link>
        </div>
      </section>
      <section>
        <div className="background_img_3"></div>
        <div className="timing">
          <p className="wien title animation_small_to_n">Ժամանակացույց</p>
          <div className="timelines">
            <div className="timeline_item animation_small_to_n">
              <p className="wien timeline_time">14:30</p>
              <Image
                src={DoubleRing}
                alt="double_ring"
                width={74}
                height={74}
                className="timeline_img"
              />
              <div className="timeline_texts">
                <p className="regular timeline_title">
                  Պսակադրություն
                  <br />
                  եկեղեցում
                </p>
                <p className="regular timeline_desc">
                  Խնդրում ենք այս տեքստը
                  <br />
                  փոխարինել իրական տեքստ
                  <br />
                  կամ փոխարինել գովազով
                </p>
              </div>
            </div>
            <Image src={Divider} alt="divider" className="timeline_didiver" />
            <div className="timeline_item animation_small_to_n">
              <p className="wien timeline_time">17:30</p>
              <Image
                alt="double_cup"
                src={DoubleCup}
                width={74}
                height={74}
                className="timeline_img"
              />
              <div className="timeline_texts">
                <p className="regular timeline_title">
                  Պսակադրություն
                  <br />
                  եկեղեցում
                </p>
                <p className="regular timeline_desc">
                  Խնդրում ենք այս տեքստը
                  <br />
                  փոխարինել իրական տեքստ
                  <br />
                  կամ փոխարինել գովազով
                </p>
              </div>
            </div>
            <Image src={Divider} alt="divider" className="timeline_didiver" />
            <div className="timeline_item animation_small_to_n">
              <p className="wien timeline_time">18:30</p>
              <Image
                src={Plate}
                alt="plate"
                width={74}
                height={74}
                className="timeline_img"
              />
              <div className="timeline_texts">
                <p className="regular timeline_title">
                  Պսակադրություն
                  <br />
                  եկեղեցում
                </p>
                <p className="regular timeline_desc">
                  Խնդրում ենք այս տեքստը
                  <br />
                  փոխարինել իրական տեքստ
                  <br />
                  կամ փոխարինել գովազով
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="dress_code">
          <p className="wien title animation_small_to_n">«Դրես կոդ»</p>
          <div className="regular subtitles">
            <p className="animation_small_to_n">
              Խնդրում ենք այս տեքստը փոխարինել իրական տեքստ կամ փոխարինել
              գովազով
            </p>
            <p className="animation_small_to_n">
              Խնդրում ենք այս տեքստը փոխարինել իրական տեքստ կամ փոխարինել
              գովազով
            </p>
          </div>
          {/* <!-- girls --> */}
          <div className="dress_code_item">
            <ul className="colors">
              <li className="color color_girl_1"></li>
              <li className="color color_girl_2"></li>
              <li className="color color_girl_3"></li>
            </ul>
            <div className="images">
              <p className="wien gender">Աղջիկներ</p>
              <div className="images_col">
                <Image
                  className="image"
                  height={265}
                  width={247}
                  alt="image"
                  src={Mario}
                />
                <Image
                  className="image"
                  height={325}
                  width={247}
                  alt="image"
                  src={Mario}
                />
              </div>
              <div className="images_col">
                <Image
                  className="image"
                  height={325}
                  width={247}
                  alt="image"
                  src={Mario}
                />
                <Image
                  className="image"
                  height={265}
                  width={247}
                  alt="image"
                  src={Mario}
                />
              </div>
              <div className="images_col">
                <Image
                  className="image"
                  height={265}
                  width={247}
                  alt="image"
                  src={Mario}
                />
                <Image
                  className="image"
                  height={325}
                  width={247}
                  alt="image"
                  src={Mario}
                />
              </div>
            </div>
          </div>
          {/* <!-- guys --> */}
          <div className="dress_code_item">
            <ul className="colors">
              <li className="color color_guy_1"></li>
              <li className="color color_guy_2"></li>
            </ul>
            <div className="images">
              <p className="wien gender">Տղաներ</p>
              <div className="images_col">
                <Image
                  className="image"
                  height={265}
                  width={247}
                  alt="image"
                  src={Mario}
                />
                <Image
                  className="image"
                  height={325}
                  width={247}
                  alt="image"
                  src={Mario}
                />
              </div>
              <div className="images_col">
                <Image
                  className="image"
                  height={325}
                  width={247}
                  alt="image"
                  src={Mario}
                />
                <Image
                  className="image"
                  height={265}
                  width={247}
                  alt="image"
                  src={Mario}
                />
              </div>
              <div className="images_col">
                <Image
                  className="image"
                  height={265}
                  width={247}
                  alt="image"
                  src={Mario}
                />
                <Image
                  className="image"
                  height={325}
                  width={247}
                  alt="image"
                  src={Mario}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="background_img_4"></div>
        <div className="form">
          <p className="wien title animation_small_to_n">Ձեր տվյալները</p>
          <p className="animation_small_to_n regular subtitles">
            Խնդրում ենք այս տեքստը փոխարինել իրական տեքստ կամ փոխարինել գովազով
          </p>
          <Image
            src={DoubleArrow}
            alt="double_arrow"
            className="double_arrow"
          />

          <Form />
        </div>
      </section>
      <section>
        <div className="contacts">
          <p className="wien title animation_small_to_n">Կապ</p>
          <div className="regular subtitles">
            <div className="phone animation_small_to_n">
              <Link href="tel:+(374)44 15 14 15">
                Հրաչ
                <br />
                +374 44 15 14 15
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=37444151415">
                <Image src={Whatsapp} alt="whatsapp" width={36} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Countdown />
      </section>
    </>
  );
}
