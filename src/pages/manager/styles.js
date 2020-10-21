import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -10;
  background: #fff;
`;

export const Items = styled.div`
  margin: 80px auto 0;
  width: 100%;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Item = styled.div`

  padding: 20px 30px;
  background: #cdcdcd;
  margin: 20px;
  display: flex;
`;

export const Information = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
	flex-direction: column;
	align-items: center;

	>h1{
		margin: 10px auto;
	}
	>div{
		>p{
			margin: 15px auto;
		}
	}
	>button{
		background: #58AF9C;
		color: #fff;
		border: none;
		padding: 10px 20px;
		margin-top: 20px;
	}
`;
