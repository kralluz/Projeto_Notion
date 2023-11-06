import { AiOutlineGlobal } from "react-icons/ai";

export const LinkInputComponent = ({ isLinkInputVisible, linkInputValue, setLinkInputValue, handleKeyPress,  }) => {

    return (
        isLinkInputVisible && (
            <div className="ContainerSetLink">
                <div className="ContainerSetLinkMenu">
                    <input
                        className="InputSetLink"
                        type="text"
                        placeholder="Colar link"
                        value={linkInputValue}
                        onChange={(e) =>
                            setLinkInputValue(e.target.value)
                        }
                        onKeyUp={handleKeyPress}
                    />
                    <div className="ContainerSetLinkMoreOptions">
                        <div className="SetLinkMoreOptions">
                            <div className="box">
                                <div className="box1">
                                    <AiOutlineGlobal />
                                </div>
                                <div className="box2">
                                    <p>{linkInputValue}</p>
                                    <p className="SetLinkMoreOptions--description">
                                        Digite uma URL completa para vincular
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};